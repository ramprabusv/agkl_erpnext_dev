from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in agkl_erpnext_dev/__init__.py
from agkl_erpnext_dev import __version__ as version

setup(
	name="agkl_erpnext_dev",
	version=version,
	description="to develop erpnext suitable for Agnikul Cosmos",
	author="svr",
	author_email="svramprabu@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
