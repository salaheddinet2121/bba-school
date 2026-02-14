<?php
declare(strict_types=1);

require_once __DIR__ . '/common.php';

enforce_post_method();
bot_guard();

$config = load_mail_config();

$formation = require_field('formation');
$type = require_field('type');
$firstName = require_field('firstName', 2);
$lastName = require_field('lastName', 2);
$email = require_email_field('email');
$phone = optional_field('phone');
$company = optional_field('company');
$message = require_field('message', 10);

$fullName = trim($firstName . ' ' . $lastName);

$html = html_block([
    'Type de formulaire' => 'Demande de devis',
    'Formation (id)' => $formation,
    'Modalité' => $type,
    'Nom' => $fullName,
    'Email' => $email,
    'Téléphone' => $phone !== '' ? $phone : '-',
    'Entreprise' => $company !== '' ? $company : '-',
    'Besoin / contexte' => $message,
    'Date' => date('Y-m-d H:i:s'),
    'IP' => $_SERVER['REMOTE_ADDR'] ?? '',
]);

send_form_mail(
    $config,
    "[SODEVA] Demande de devis - {$formation} ({$type})",
    $html,
    $email,
    $fullName
);

json_response(200, ['ok' => true]);

