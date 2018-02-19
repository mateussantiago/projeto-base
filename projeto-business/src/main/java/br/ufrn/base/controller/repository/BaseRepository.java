package br.ufrn.base.controller.repository;

import br.ufrn.base.controller.model.Base;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface BaseRepository extends JpaRepository<Base, Long>, JpaSpecificationExecutor<Base> {

}