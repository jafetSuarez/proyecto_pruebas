from locust import task, between
from locust.contrib.fasthttp import FastHttpUser

# (Only first time) Install @locust, open a terminal & run: pip3 install locust
# Open terminal & run: locust -f us_pg.py
# Open address: http://localhost:8089/
# Insert the Number of total users to simulate
# Insert the Spawn rate (users spawned/second)
# Finally the HOST of the page that probably loads it, otherwise it is:  https://us.pg.com

class WebsiteUser(FastHttpUser):

    # Config the host
    host = "https://us.pg.com"
    wait_time = between(2, 50)

    # some things you can configure on FastHttpUser
    connection_timeout = 60.0
    insecure = True
    max_redirects = 5
    max_retries = 1
    network_timeout = 60.0

    # Index
    @task(1)
    def index(self):
        self.client.get("/")
        pass

    # Brands
    @task(2)
    def brands(self):
        self.client.get("/brands")
        pass

    # Baby
    @task(3)
    def baby_care(self):
        self.client.get("/brands/#Baby-Care")
        pass

    # Fabric
    @task(4)
    def fabric_care(self):
        self.client.get("/brands/#Fabric-Care")
        pass

    # Family
    @task(5)
    def family_care(self):
        self.client.get("/brands/#Family-Care")
        pass

    # Feminine
    @task(6)
    def femenine_care(self):
        self.client.get("/brands/#Feminine-Care")
        pass

    # Grooming
    @task(7)
    def grooming(self):
        self.client.get("/brands/#Grooming")
        pass

    # Hair
    @task(8)
    def hair_care(self):
        self.client.get("/brands/#Hair-Care")
        pass

    # Home
    @task(9)
    def home_care(self):
        self.client.get("/brands/#Home-Care")
        pass

    # Oral
    @task(10)
    def oral_care(self):
        self.client.get("/brands/#Oral-Care")
        pass

    # Personal health
    @task(11)
    def personal_health_care(self):
        self.client.get("/#Personal-Health-Care")
        pass

    # Sking & Personal
    @task(12)
    def personal_health_care(self):
        self.client.get("/brands/#Skin-and-Personal-Care")
        pass