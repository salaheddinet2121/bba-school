<?php
declare(strict_types=1);

use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;

require_once __DIR__ . '/vendor/autoload.php';

/**
 * @return array{
 *   smtp_host:string,
 *   smtp_port:int,
 *   smtp_secure:string,
 *   smtp_username:string,
 *   smtp_password:string,
 *   from_email:string,
 *   from_name:string,
 *   to_email:string,
 *   to_name:string
 * }
 */
function load_mail_config(): array
{
    $config = require __DIR__ . '/secrets.php';

    $required = [
        'smtp_host',
        'smtp_port',
        'smtp_secure',
        'smtp_username',
        'smtp_password',
        'from_email',
        'from_name',
        'to_email',
        'to_name',
    ];

    foreach ($required as $key) {
        if (!array_key_exists($key, $config) || $config[$key] === '') {
            json_response(500, ['ok' => false, 'message' => "SMTP config key missing: {$key}"]);
        }
    }

    return $config;
}

function json_response(int $status, array $payload): void
{
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function enforce_post_method(): void
{
    if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
        json_response(405, ['ok' => false, 'message' => 'Method not allowed']);
    }
}

function clean_input(?string $value): string
{
    return trim((string) $value);
}

function require_field(string $field, int $minLength = 1): string
{
    $value = clean_input($_POST[$field] ?? '');
    if (mb_strlen($value) < $minLength) {
        json_response(422, ['ok' => false, 'message' => "Champ requis: {$field}"]);
    }
    return $value;
}

function optional_field(string $field): string
{
    return clean_input($_POST[$field] ?? '');
}

function require_email_field(string $field): string
{
    $email = require_field($field, 3);
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        json_response(422, ['ok' => false, 'message' => "Email invalide: {$field}"]);
    }
    return $email;
}

function bot_guard(): void
{
    $honeypot = clean_input($_POST['_gotcha'] ?? '');
    if ($honeypot !== '') {
        // Fake success for bots.
        json_response(200, ['ok' => true]);
    }
}

function send_form_mail(array $config, string $subject, string $htmlBody, string $replyToEmail = '', string $replyToName = ''): void
{
    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host = $config['smtp_host'];
        $mail->Port = (int) $config['smtp_port'];
        $mail->SMTPAuth = true;
        $mail->Username = $config['smtp_username'];
        $mail->Password = $config['smtp_password'];
        $mail->SMTPSecure = $config['smtp_secure'];
        $mail->CharSet = 'UTF-8';

        $mail->setFrom($config['from_email'], $config['from_name']);
        $mail->addAddress($config['to_email'], $config['to_name']);

        if ($replyToEmail !== '' && filter_var($replyToEmail, FILTER_VALIDATE_EMAIL)) {
            $mail->addReplyTo($replyToEmail, $replyToName !== '' ? $replyToName : $replyToEmail);
        }

        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body = $htmlBody;
        $mail->AltBody = trim(strip_tags(str_replace(['<br>', '<br/>', '<br />'], "\n", $htmlBody)));

        $mail->send();
    } catch (Exception $e) {
        json_response(500, ['ok' => false, 'message' => 'Envoi email impossible', 'error' => $e->getMessage()]);
    }
}

function html_block(array $rows): string
{
    $htmlRows = '';
    foreach ($rows as $label => $value) {
        $safeLabel = htmlspecialchars((string) $label, ENT_QUOTES, 'UTF-8');
        $safeValue = nl2br(htmlspecialchars((string) $value, ENT_QUOTES, 'UTF-8'));
        $htmlRows .= "<tr><td style=\"padding:8px 12px;font-weight:600;vertical-align:top;\">{$safeLabel}</td><td style=\"padding:8px 12px;\">{$safeValue}</td></tr>";
    }

    return '<table style="border-collapse:collapse;width:100%;max-width:760px;">' . $htmlRows . '</table>';
}
