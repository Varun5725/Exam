package com.sql.MySql;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	private UserRepository Ur;
	
	@GetMapping
	public List<User> getAllUser(){
		return this.Ur.findAll();
	}
	
	@GetMapping("/{id}")
	public User getUserById(@PathVariable("id") long userId) {
		return this.Ur.findById(userId).orElse(null);
	}
	
	@PostMapping
	public User createUser(@RequestBody User user) {
		return this.Ur.save(user);
	}
	
	@PutMapping("/{id}")
	public User updateUser(@RequestBody User user , @PathVariable("id") long userId) {
		User ex=this.Ur.findById(userId).orElse(null);
		ex.setFirstname(user.getFirstname());
		ex.setFirstname(user.getFirstname());
		
		return this.Ur.save(ex);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<User> deleteUser(@PathVariable("id") long userId){
		User ex=this.Ur.findById(userId).orElse(null);
		this.Ur.delete(ex);
		return ResponseEntity.ok().build();
		
	}
}
