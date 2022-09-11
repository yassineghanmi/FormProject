package test.h2.ContentManagementSystem.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import test.h2.ContentManagementSystem.entity.Contacts;
import test.h2.ContentManagementSystem.service.ContactsService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ContactsController {

	@Autowired
	private ContactsService contactsService;
	
	@PostMapping("/addContact")
	public Contacts addContact(@RequestBody Contacts contacts) {
		return contactsService.createContact(contacts);
	}
}
