import unittest
import time
from selenium import webdriver
from selenium.webdriver.common.keys import Keys


class AdminLogout(unittest.TestCase):

    def setup(self):
        self.driver = webdriver.Chrome()

    def test_adminLogout(self):
        user = "instructor"
        pwd = "maverick1a"
        fn = "Jim"
        ln = 'karen'
        email = "Jim@gmail.com"
        phn = "4032453455"
        driver = webdriver.Chrome()
        driver.maximize_window()
        driver.get("http://127.0.0.1:8000/login")
        time.sleep(25)
        # # elem= driver.find_element_by_class_name('mat-form-field-flex')
        elem = driver.find_element_by_id("username")
        elem.send_keys(user)
        elem = driver.find_element_by_id("password")
        elem.send_keys(pwd)
        elem = driver.find_element_by_id("signin")
        elem.click()
        time.sleep(3)
        elem = driver.find_element_by_id("a_customer")
        elem.click()
        time.sleep(3)
        elem = driver.find_element_by_id("a_customeradd")
        elem.click()
        time.sleep(3)
        elem = driver.find_element_by_id("a_c_firstname")
        elem.send_keys(fn)
        elem = driver.find_element_by_id("a_c_lastname")
        elem.send_keys(ln)
        elem = driver.find_element_by_id("a_c_email")
        elem.send_keys(email)
        elem = driver.find_element_by_id("a_c_phonenumber")
        elem.send_keys(phn)
        time.sleep(1)
        elem = driver.find_element_by_id("a_customersave")
        elem.click()
        time.sleep(2)
        # elem = driver.find_element_by_id("a_customerdelete")
        # elem.click()
        # time.sleep(2)
        elem = driver.find_element_by_id("a_logout")
        elem.click()

        time.sleep(1)

    def teardown(self):
        self.driver.close()


if __name__ == "__main__":
    unittest.main()
