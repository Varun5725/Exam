package com.mongo.MongoDb;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/book")
public class BookController {
	@Autowired
	private MongoRepo repo;
	
	@GetMapping
	public List<Book> getBooks(){
		return repo.findAll();
	}
	
	@PostMapping
	public String saveBook(@RequestBody Book book) {
		repo.save(book);
		return "Added Successfully";
	}
	
	@DeleteMapping("/{id}")
	public String deleteBook(@PathVariable int id){
		repo.deleteById(id);
		return "Deleted Successfully";
		
	}
	

}
