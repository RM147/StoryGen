package logic;

import java.util.List;

import javax.inject.Inject;

import persist.repo.RepoInterface;

public class WordService implements ServiceInterface {

	@Inject
	private RepoInterface repo;

	@Override
	public String addWord(String word) {

		return repo.addWord(word);
	}

	@Override
	public String readWord(Long id) {

		return repo.readWord(id);
	}

	@Override
	public String updateWord(String genre, Long id) {
		return repo.updateWord(genre, id);
	}

	@Override
	public String deleteWord(Long id) {

		return repo.deleteWord(id);
	}

	public void setRepo(RepoInterface repo) {
		this.repo = repo;
	}

	

}
