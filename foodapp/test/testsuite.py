
import unittest
import time
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from tests import Forgot_password, login, logout, DownloadForm

loader = unittest.TestLoader()
suite = unittest.TestSuite()
suite.addTest(loader.loadTestsFromModule(login))
suite.addTest(loader.loadTestsFromModule(logout))
suite.addTest(loader.loadTestsFromModule(Forgot_password))
suite.addTest(loader.loadTestsFromModule(DownloadForm))


runner = unittest.TextTestRunner(verbosity=3)
result = runner.run(suite)
suite = unittest.TestSuite()
suite.addTest(unittest.loader.findTestCases(AdminLogin))
suite.addTest(unittest.loader.findTestCases(AdminLogout))
suite.addTest(unittest.loader.findTestCases(AdminAddDeleteCustomer))
suite.addTest(unittest.loader.findTestCases(AdminAddDeleteMenu))
suite.addTest(unittest.loader.findTestCases(UserLogin))
suite.addTest(unittest.loader.findTestCases(UserLogout))
suite.addTest(unittest.loader.findTestCases(UserSelectMenu))
suite.addTest(unittest.loader.findTestCases(UserSelectMaincourse))
suite.addTest(unittest.loader.findTestCases(UserSelectDesserts))

runner = unittest.TextTestRunner(verbosity=3)
result = runner.run(suite)
driver = mytest.getOrCreateWebdriver()
driver.close()
