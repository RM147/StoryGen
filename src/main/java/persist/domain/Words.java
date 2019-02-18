package persist.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Words {

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private Long id;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	private String category;
	private String word;
	private String genre;

	public Words() {
	}

	public Words(String word, String type, String genre) {
		this.word = word;
		this.category = type;
		this.genre = genre;
	}

	public String getType() {
		return category;
	}

	public void setType(String type) {
		this.category = type;
	}

	public String getWord() {
		return word;
	}

	public void setWord(String word) {
		this.word = word;
	}

	public String getGenre() {
		return genre;
	}

	public void setGenre(String genre) {
		this.genre = genre;
	}

}
