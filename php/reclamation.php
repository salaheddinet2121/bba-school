<?php
declare(strict_types=1);

require_once __DIR__ . '/common.php';

enforce_post_method();
bot_guard();

$config = load_mail_config();

$name = require_field('nom', 2);
$email = require_email_field('email');
$phone = optional_field('telephone');
$subject = require_field('objet');
$message = require_field('message', 20);

$subjectLabels = [
    'qualite' => 'Qualité de la formation',
    'organisation' => 'Organisation / planning',
    'administratif' => 'Administratif',
    'autre' => 'Autre',
];

$subjectLabel = $subjectLabels[$subject] ?? $subject;

$html = html_block([
    'Type de formulaire' => 'Réclamation',
    'Nom' => $name,
    'Email' => $email,
    'Téléphone' => $phone !== '' ? $phone : '-',
    'Objet' => $subjectLabel,
    'Réclamation' => $message,
    'Date' => date('Y-m-d H:i:s'),
    'IP' => $_SERVER['REMOTE_ADDR'] ?? '',
]);

send_form_mail(
    $config,
    "[SODEVA] Réclamation - {$subjectLabel}",
    $html,
    $email,
    $name
);

json_response(200, ['ok' => true]);

