package kr.xio.jwtauthenticationservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import kr.xio.jwtauthenticationservice.model.User;
import kr.xio.jwtauthenticationservice.repository.UserRepository;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;


@RestController
public class IndexController {
    
    @Autowired
	    private UserRepository userRepository;

	@Autowired
	    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @GetMapping("/")
    public String index() {
        return "esx";
    }

    @GetMapping("/user")
    public String user(){

        return "user";
    }
    @GetMapping("/admin")
    public String admin(){

        return "admin";
    }
    @GetMapping("/manager")
    public String manager(){

        return "manager";
    }
    @GetMapping("/login")
    public String login(){

        return "loginForm";
    }

    @PostMapping("/signUp")
    public String signUp(@RequestBody User user){

        user.setRole("ROLE_USER");

        String rawPassword = user.getPassword();
        String encPassword = bCryptPasswordEncoder.encode(rawPassword);
        
        user.setPassword(encPassword);
        
        userRepository.save(user);

        return "회원가입 성공";
    }

    @GetMapping("/joinProc")
    public String joinProc(User user){
        System.out.println(user);
        return "회원가입 완료";
    }
    
}
