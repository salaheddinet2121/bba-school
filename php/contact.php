<?php
declare(strict_types=1);

require_once __DIR__ . '/common.php';

enforce_post_method();
bot_guard();

$config = load_mail_config();

$firstName = require_field('firstName', 2);
$lastName = require_field('lastName', 2);
$email = require_email_field('email');
$subjectCode = require_field('subject');
$message = require_field('message', 10);

$subjectLabels = [
    'general' => 'Demande générale',
    'sales' => 'Tarifs et inscription',
    'support' => 'Support pédagogique',
    'enterprise' => 'Besoin entreprise',
    'partnership' => 'Partenariat',
];

$subjectLabel = $subjectLabels[$subjectCode] ?? $subjectCode;
$fullName = trim($firstName . ' ' . $lastName);

$html = html_block([
    'Type de formulaire' => 'Contact',
    'Nom' => $fullName,
    'Email' => $email,
    'Objet' => $subjectLabel,
    'Message' => $message,
    'Date' => date('Y-m-d H:i:s'),
    'IP' => $_SERVER['REMOTE_ADDR'] ?? '',
]);

send_form_mail(
    $config,
    "[SODEVA] Contact - {$subjectLabel}",
    $html,
    $email,
    $fullName
);

json_response(200, ['ok' => true]);

