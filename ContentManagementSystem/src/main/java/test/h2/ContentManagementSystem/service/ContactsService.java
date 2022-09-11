package test.h2.ContentManagementSystem.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import test.h2.ContentManagementSystem.entity.Contacts;
import test.h2.ContentManagementSystem.repository.ContactsRepository;

@Service
public class ContactsService {

	@Autowired
	ContactsRepository contactsRepository; 
	
	public Contacts createContact(Contacts contacts) {
		return contactsRepository.save(contacts);
	}
}
