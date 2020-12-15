import time
from locust import HttpUser, task


class QuickstartUser(HttpUser):

    @task
    def index(self):
        self.client.get("marcas-y-productos/")
        time.sleep(100)

    @task
    def cuidado_bebe(self):
        self.client.get("marcas-y-productos/#Cuidado-del-bebé")
        self._sleep(self.wait_time())
        #time.sleep(100)

    @task
    def cuidado_ropa(self):
        self.client.get("marcas-y-productos/#Cuidado-de-la-ropa")
        time.sleep(100)

    @task
    def cuidado_familia(self):
        self.client.get("marcas-y-productos/#Cuidado-de-la-familia")
        time.sleep(100)

    @task
    def cuidado_femenino(self):
        self.client.get("marcas-y-productos/#Cuidado-femenino")
        time.sleep(100)

    @task
    def cuidado_personal(self):
        self.client.get("marcas-y-productos/#Cuidado-personal")
        time.sleep(100)

    @task
    def cuidado_cabello(self):
        self.client.get("marcas-y-productos/#Cuidado-del-cabello")
        time.sleep(100)

    @task
    def cuidado_hogar(self):
        self.client.get("marcas-y-productos/#Cuidado-en-el-hogar")
        time.sleep(100)

    @task
    def cuidado_oral(self):
        self.client.get("marcas-y-productos/#Cuidado-oral")
        time.sleep(100)

    @task
    def cuidado_salud(self):
        self.client.get("marcas-y-productos/#Cuidado-de-la-salud-personal")
        time.sleep(100)

    @task
    def cuidado_piel(self):
        self.client.get("marcas-y-productos/#Cuidado-personal-y-de-la-piel")
        time.sleep(100)
