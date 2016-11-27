package com.li.myservlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/MyServlet")
public class MyServlet extends HttpServlet {

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doPost(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		response.setContentType("text/html;charset=UTF-8");
		request.setCharacterEncoding("UTF-8");
		response.setCharacterEncoding("UTF-8");
		//获取输出流
		PrintWriter out = response.getWriter();
		
		String name = request.getParameter("name");
		String age = request.getParameter("age");
		String flag = request.getParameter("flag");
		
		if("123".equals(flag)){
			out.write(name+","+age+","+flag);
		}else if("456".equals(flag)){
			out.write(name+"-"+age+"-"+flag);
		}else{
			out.write(name+"~"+age+"~"+flag);
		}
		
		
		

	}

}















