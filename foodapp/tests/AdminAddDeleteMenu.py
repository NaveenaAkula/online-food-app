import unittest
import time
from selenium import webdriver
from selenium.webdriver.support.ui import Select
from selenium.webdriver.common.keys import Keys


class AdminLogout(unittest.TestCase):

    def setup(self):
        self.driver = webdriver.Chrome()

    def test_adminLogout(self):
        user = "instructor"
        pwd = "maverick1a"
        menuname = "Pizza"
        menutype = "Appetizer"
        price = "10"
        driver = webdriver.Chrome()
        driver.maximize_window()
        driver.get("http://127.0.0.1:8000")
        # # elem= driver.find_element_by_class_name('mat-form-field-flex')
        elem = driver.find_element_by_id("username")
        elem.send_keys(user)
        elem = driver.find_element_by_id("password")
        elem.send_keys(pwd)
        elem = driver.find_element_by_id("signin")
        elem.click()
        time.sleep(3)
        elem = driver.find_element_by_id("a_menu")
        elem.click()
        time.sleep(3)
        elem = driver.find_element_by_id("a_menuadd")
        elem.click()
        time.sleep(3)
        elem = driver.find_element_by_id("a_menuname")
        elem.send_keys(menuname)
        time.sleep(3)
        elem = driver.find_element_by_id("a_menutype")
        elem.send_keys(menutype)
        elem = driver.find_element_by_id("a_menuprice")
        elem.send_keys(price)
        elem = driver.find_element_by_id("a_menusave")
        elem.click()
        time.sleep(3)
        elem = driver.find_element_by_id("a_logout")
        elem.click()

        # elem.send_keys(Keys.RETURN)
        time.sleep(1)

    def teardown(self):
        self.driver.close()


if __name__ == "__main__":
    unittest.main()
