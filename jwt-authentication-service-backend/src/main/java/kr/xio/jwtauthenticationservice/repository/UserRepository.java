package kr.xio.jwtauthenticationservice.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import kr.xio.jwtauthenticationservice.model.User;


// JpaRepository 를 상속하면 자동 컴포넌트 스캔됨.
public interface UserRepository extends JpaRepository<User, Integer>{
	
}