package logic;

import java.util.List;

import javax.inject.Inject;

import persist.repo.UserInterface;

public class UserService implements UserServiceInterface{
	
	@Inject
	private UserInterface repo;

	@Override
	public String addUser(String user) {
		return repo.addUser(user);
	}

	@Override
	public String readUser(Long id) {
		if(repo.readUser(id).equals("null")) {
			return "No such user";
		}		
		return repo.readUser(id);
	}
	
	@Override
	public String login(String user, String pass) {
		return repo.login(user, pass);
	}

	@Override
	public String updateUser(String pass, Long id) {
		return repo.updateUser(pass, id);
	}

	@Override
	public String deleteUser(Long id) {
		return repo.deleteUser(id);
	}
	
	public void setRepo(UserInterface repo) {
		this.repo = repo;
	}

	

}
