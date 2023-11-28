package com.security.springSecurity;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SecurityController {

	@GetMapping("/")
	public String welcome() {
		return ("<h1> WELCOME TO SPRINGBOOT SECURITY</h1>");
	}
}
