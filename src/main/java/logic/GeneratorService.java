package logic;

import java.util.List;

import javax.inject.Inject;

import persist.repo.GenRepoInterface;
import persist.repo.RepoInterface;

public class GeneratorService implements GeneratorInterface {

	@Inject
	private GenRepoInterface repo;

	@Override
	public String genAdj() {
		return repo.genAdj();
	}

	@Override
	public String genNoun(String genre) {
		return repo.genNoun(genre);
	}

	@Override
	public String genSetting(String genre) {
		return repo.genSetting(genre);
	}

	@Override
	public String genVerb() {
		return repo.genVerb();
	}

	@Override
	public String genStory(String genre) {
		return repo.genStory(genre);
	}

	public void setRepo(GenRepoInterface repo) {
		this.repo = repo;
	}

}
