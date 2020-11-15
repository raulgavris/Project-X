from django.test import TestCase


class DummyTestCase(TestCase):

    def test_motion_defaults(self):
        self.assertEqual(1 + 1, 2)
