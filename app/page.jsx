// app/page.js
import Link from 'next/link';
import './globals.css'; // 确保全局样式存在

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      {/* 导航栏 */}
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">
          MyLavaFlow
        </h1>
        <div className="space-x-4">
          <Link href="/" className="px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            首页
          </Link>
          <Link href="/about" className="px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            关于
          </Link>
          <Link href="/projects" className="px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            项目
          </Link>
        </div>
      </nav>

      {/* 核心内容区 */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-5xl font-bold mb-6 tracking-tight">
          欢迎来到 MyLavaFlow
        </h2>
        <p className="text-xl max-w-2xl mx-auto mb-10 text-gray-600 dark:text-gray-400">
          基于 Next.js + Netlify 构建的个人项目平台
          <br />
          专注于 小说创作管理工具 / HTML 封包应用开发
        </p>
        <div className="space-x-4">
          <Link 
            href="https://github.com/Myz0123/next-platform-starter" 
            target="_blank"
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            查看 GitHub 源码
          </Link>
          <Link 
            href="/projects"
            className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            浏览项目
          </Link>
        </div>
      </section>

      {/* 项目亮点 */}
      <section className="container mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold mb-12 text-center">核心功能</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition">
            <h4 className="text-xl font-semibold mb-3">小说设定管理</h4>
            <p className="text-gray-600 dark:text-gray-400">
              支持宏大叙事世界观、修真百艺职业系统、民国架空题材设定的结构化管理
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition">
            <h4 className="text-xl font-semibold mb-3">HTML 一键封包</h4>
            <p className="text-gray-600 dark:text-gray-400">
              基于 Electron/Tauri 打包本地 HTML 为桌面应用，免安装、跨平台、超小体积
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition">
            <h4 className="text-xl font-semibold mb-3">AI 辅助创作</h4>
            <p className="text-gray-600 dark:text-gray-400">
              集成 AI 驱动的大纲生成、章节编辑、设定优化功能，提升创作效率
            </p>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="container mx-auto px-4 py-8 text-center text-gray-500 dark:text-gray-400">
        <p>© {new Date().getFullYear()} MyLavaFlow · 基于 Next.js + Netlify 构建</p>
      </footer>
    </main>
  );
}
