/**
 * 
 */
package com.project.login.errors;

import org.springframework.boot.autoconfigure.web.ErrorController;
import org.springframework.stereotype.Controller;

/**
 * @author Administrator
 *
 */
@Controller
public class LoginErrorController implements ErrorController {

	/* (non-Javadoc)
	 * @see org.springframework.boot.autoconfigure.web.ErrorController#getErrorPath()
	 */
	@Override
	public String getErrorPath() {
		return "Error on page";
	}
}