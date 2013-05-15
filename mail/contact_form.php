<?php

	//$emailTo = "info@sound.com"; // Enter your email for feedbacks here
	$emailTo = "support@perfec.tt"; // Enter your email for feedbacks here

	$headers = "MIME-Version: 1.0\r\n";
	$headers .= "Content-type: text/html; charset=utf-8\r\n";

	$subject = "Contact form message"; // Enter your subject here
	$body = "";

	reset($_GET);
	while (list($key, $val) = each($_GET)) {
		$title = ucwords(strtolower($key));
		$body .= "<b>$title:</b> ";
		$body .= $val;
	  	$body .= "<br>";
	}

	$result = mail($emailTo, $subject, $body, $headers);

  ?>