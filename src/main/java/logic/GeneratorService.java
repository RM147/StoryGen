package logic;

import java.util.List;

import javax.inject.Inject;

import persist.repo.GenRepoInterface;

public class GeneratorService implements GeneratorInterface {

	@Inject
	private GenRepoInterface repo;

	@Override
	public String genAdj() {
		return repo.genAdj();
	}

	@Override
	public String genNoun() {
		return repo.genNoun();
	}

	@Override
	public String genSetting() {
		return repo.genSetting();
	}

	@Override
	public String genVerb() {
		return repo.genVerb();
	}

	@Override
	public String genStory() {
		return repo.genStory();
	}

}
