package com.jwt.example.jwtExample3;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.jwt.example.jwtExample3")
public class JwtExample3Application {

	public static void main(String[] args) {
		SpringApplication.run(JwtExample3Application.class, args);
	}

}
