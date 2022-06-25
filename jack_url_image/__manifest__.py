# -*- coding: utf-8 -*-
# code:__manifest__.py
{
    'name': "jack_url_image",
    'summary': """图片挂件改存api图床""",
    'description': """图片挂件改存api图床""",
    'author': "jackadam",
    'website': "http://www.baidu.com",
    'category': 'Administration',
    'version': '15.0.0.1',
    'depends': ['base', 'hr'],  # 修改这里
    'installable': True,
    'application': True,
    'auto_install': False,
    'assets': {
        'web.assets_backend': [
            'jack_url_image/static/src/js/components/JackUrlImage.js',
        ],
        "web.assets_qweb": [
            "jack_url_image/static/src/js/components/JackUrlImage.xml",
        ],
    },
    "data": [
        "url_image.xml",
    ],
}
