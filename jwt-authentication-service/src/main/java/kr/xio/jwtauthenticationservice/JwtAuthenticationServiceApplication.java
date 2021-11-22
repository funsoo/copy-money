package kr.xio.jwtauthenticationservice;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude={DataSourceAutoConfiguration.class})
public class JwtAuthenticationServiceApplication {

public static void main(String[] args) {
		SpringApplication.run(JwtAuthenticationServiceApplication.class, args);

	}

}
