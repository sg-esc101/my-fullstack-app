package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin; // Import for CORS

@RestController
public class HelloController {

    // Allow requests from the frontend running on localhost:3000
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/api/hello")
    public String hello() {
        return "Hello from Spring Boot Backend!";
    }
}