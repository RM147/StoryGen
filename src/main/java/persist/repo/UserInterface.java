package persist.repo;

public interface UserInterface {
	
	String addUser(String user);

	String readUser(Long id);

	String updateUser(String pass, Long id);

	String deleteUser(Long id);

}
