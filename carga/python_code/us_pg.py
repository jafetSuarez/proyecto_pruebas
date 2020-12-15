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
    @task
    def index(self):
        self.client.get("/")

    # Brands
    @task
    def brands(self):
        self.client.get("/brands")

    # Baby
    @task
    def baby_care(self):
        self.client.get("/brands/#Baby-Care")

    # Fabric
    @task
    def fabric_care(self):
        self.client.get("/brands/#Fabric-Care")

    # Family
    @task
    def family_care(self):
        self.client.get("/brands/#Family-Care")

    # Feminine
    @task
    def femenine_care(self):
        self.client.get("/brands/#Feminine-Care")

    # Grooming
    @task
    def grooming(self):
        self.client.get("/brands/#Grooming")

    # Hair
    @task
    def hair_care(self):
        self.client.get("/brands/#Hair-Care")

    # Home
    @task
    def home_care(self):
        self.client.get("/brands/#Home-Care")

    # Oral
    @task
    def oral_care(self):
        self.client.get("/brands/#Oral-Care")

    # Personal health
    @task
    def personal_health_care(self):
        self.client.get("/#Personal-Health-Care")

    # Sking & Personal
    @task
    def personal_health_care(self):
        self.client.get("/brands/#Skin-and-Personal-Care")