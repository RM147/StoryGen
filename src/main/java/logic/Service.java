package logic;


import javax.inject.Inject;

import org.apache.log4j.Logger;

import logic.ServiceImpl;
import persist.repo.WordRepo;

public class Service implements ServiceImpl{
	
	@Inject
	private WordRepo repo;

	@Override
	public String addWord(String word) {
		return repo.addWord(word);
	}

	@Override
	public String readWord(Long id) {
		return repo.readWord(id);
	}

	@Override
	public String updateWord(Long id, String genre) {
		return repo.updateWord(id, genre);
	}

	@Override
	public String deleteWord(Long id) {
		return repo.deleteWord(id);
	}

	

}
