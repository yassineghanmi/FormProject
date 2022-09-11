package test.h2.ContentManagementSystem.entity;

import java.util.Date;

import javax.persistence.*;

@Entity
public class Contacts {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long Id;


	private String nom;
	private String addresse;
	private String ville;
	private String pays;
	private String telephone;
	private Date debut_de_contract;
	
	public Long getId() {
		return Id;
	}
	public void setId(Long id) {
		Id = id;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public String getAddresse() {
		return addresse;
	}
	public void setAddresse(String addresse) {
		this.addresse = addresse;
	}
	public String getVille() {
		return ville;
	}
	public void setVille(String ville) {
		this.ville = ville;
	}
	public String getPays() {
		return pays;
	}
	public void setPays(String pays) {
		this.pays = pays;
	}
	public String getTelephone() {
		return telephone;
	}
	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}
	public Date getDebut_de_contract() {
		return debut_de_contract;
	}
	public void setDebut_de_contract(Date debut_de_contract) {
		this.debut_de_contract = debut_de_contract;
	}

	

}
