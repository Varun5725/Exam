package com.mongo.MongoDb;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface MongoRepo extends MongoRepository<Book, Integer> {

}
