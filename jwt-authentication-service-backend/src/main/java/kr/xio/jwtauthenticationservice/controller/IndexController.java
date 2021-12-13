package kr.xio.jwtauthenticationservice.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@Controller
public class IndexController {

    @RequestMapping(value = "/")
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

        return "login";
    }
    @GetMapping("/join")
    public String join(){

        return "join";
    }

    @GetMapping("/joinProc")
    public String joinProc(){

        return "회원가입 완료";
    }
    
}
