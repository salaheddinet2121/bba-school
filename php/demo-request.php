<?php
declare(strict_types=1);

require_once __DIR__ . '/common.php';

enforce_post_method();
bot_guard();

$config = load_mail_config();

$firstName = require_field('firstName', 2);
$lastName = require_field('lastName', 2);
$email = require_email_field('email');
$company = require_field('company', 2);
$teamSize = require_field('teamSize');
$message = optional_field('message');

$fullName = trim($firstName . ' ' . $lastName);

$html = html_block([
    'Type de formulaire' => 'Demande de démo',
    'Nom' => $fullName,
    'Email' => $email,
    'Entreprise' => $company,
    'Taille équipe' => $teamSize,
    'Message' => $message !== '' ? $message : '-',
    'Date' => date('Y-m-d H:i:s'),
    'IP' => $_SERVER['REMOTE_ADDR'] ?? '',
]);

send_form_mail(
    $config,
    '[SODEVA] Nouvelle demande de démo',
    $html,
    $email,
    $fullName
);

json_response(200, ['ok' => true]);

