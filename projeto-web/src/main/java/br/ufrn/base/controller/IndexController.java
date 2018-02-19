package br.ufrn.base.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import java.io.IOException;

@Controller
public class IndexController {

    @RequestMapping("/")
    public String index(Model model) throws IOException {
            return "main/index";
    }

}