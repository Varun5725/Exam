package com.sql.MySql;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

@SpringBootTest
class UserApplicationTests {

    @Autowired
    UserRepository userRepository;

    @Test
    @Transactional
    public void testCreate() {
        User user = new User();
        user.setId(60L);
        user.setFirstname("Varun"); // Corrected the field name
        user.setFirstname("B");
        User savedUser = userRepository.save(user);

        assertThat(savedUser.getId()).isNotNull();
    }

    @Test
    public void testReadAll() {
        List<User> userList = userRepository.findAll();
        assertThat(userList).isNotEmpty();
    }

    @Test
    @Transactional
    public void testUpdate() {
        User user = userRepository.findById(2L).orElse(null);
        assertThat(user).isNotNull();

        user.setFirstname("Daya");
        userRepository.save(user);

        // Check if the update was successful
        User updatedUser = userRepository.findById(2L).orElse(null);
        assertThat(updatedUser).isNotNull();
        assertThat(updatedUser.getFirstname()).isEqualTo("Daya");
    }

    @Test
    @Transactional
    public void testDelete() {
        userRepository.deleteById(2L);

        // Check if the user with ID 2L was successfully deleted
        assertThat(userRepository.existsById(2L)).isFalse();
    }
}
