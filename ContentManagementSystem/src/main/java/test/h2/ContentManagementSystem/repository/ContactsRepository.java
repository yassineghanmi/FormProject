package test.h2.ContentManagementSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import test.h2.ContentManagementSystem.entity.Contacts;

public interface ContactsRepository extends JpaRepository<Contacts, Long> {

}
