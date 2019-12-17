import unittest
import time
from selenium import webdriver
from selenium.webdriver.common.keys import Keys


class UserSelectMenu(unittest.TestCase):

    def setup(self):
        self.driver = webdriver.Chrome()

    def test_userselectmenu(self):
        user = "janu"
        pwd = "P@$$wrd1"
        # ordertype = "take out"
        # quantity = "2"
        # timeofarr = "12:30AM"
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
        time.sleep(2)
        elem = driver.find_element_by_id("u_maincourse")
        elem.click()
        time.sleep(2)
        # elem = driver.find_element_by_id("u_addorder")
        # elem.click()
        # time.sleep(2)
        # elem = driver.find_element_by_id("u_addordertype")
        # elem.send_keys(ordertype)
        # time.sleep(2)
        # elem = driver.find_element_by_id("u_addquantity")
        # elem.send_keys(quantity)
        # elem = driver.find_element_by_id("u_addordertimeofarival")
        # elem.send_keys(timeofarr)
        # time.sleep(2)
        # elem = driver.find_element_by_id("u_addordersubmit")
        # elem.click()
        # # time.sleep(2)
        # elem = driver.find_element_by_id("u_dialog")
        # elem.click()
        time.sleep(2)
        elem = driver.find_element_by_id("u_logout")
        elem.click()

        # elem.send_keys(Keys.RETURN)
        time.sleep(2)


    def teardown(self):
        self.driver.close()


if __name__ == "__main__":
    unittest.main()
