const IS_DEV = process.env.NODE_ENV !== 'production';

exports.envs = {
  navs: [
    {
      link: '/poem',
      text: '诗歌',
    },
    {
      link: '/article',
      text: '随笔',
    },
    {
      link: '/music',
      text: '音乐',
    },
    {
      link: '/admin',
      text: '管理',
    },
  ],
  adminMenus: [
    {
      link: '/admin',
      text: '总览',
      icon: 'home',
    },
    {
      link: '/admin/article',
      text: '文章管理',
      icon: 'article',
    },
    {
      link: '/admin/tag',
      text: '标签管理',
      icon: 'article',
    },
    {
      link: '/admin/setting',
      text: '系统设置',
      icon: 'setting',
    },
  ],
};
