import unittest
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By

# inherit TestCase class and create a new test class
class SeleniumTest(unittest.TestCase):

    # initialization of webdriver
    def setUp(self):
        self.driver = webdriver.Firefox()

    # test case method
    def testSearch(self):

        # get driver
        driver = self.driver

        # get python.org
        driver.get("http://www.python.org")

        # print title of the webpage
        print(driver.title)

        # assertion to confirm if title has python keyword in it
        self.assertIn("Python", driver.title)

        # locate element using name
        elem = driver.find_element(by=By.NAME, value='q')

        # send data
        elem.send_keys("Hello")

        # receive data
        elem.send_keys(Keys.RETURN)
        assert "No results found." not in driver.page_source

    # cleanup method called after every test performed
    def cleanUp(self):
        self.driver.close()


# execute the script
if __name__ == "__main__":
    unittest.main()
