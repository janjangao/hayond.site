import { Head } from "$fresh/runtime.ts";
// import { useSignal } from "@preact/signals";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="origin/styles.css" />
        <link rel="icon" href="origin/logo.png" />
      </Head>

      <canvas></canvas>
      <div style="position: absolute; bottom: 0; width: 100%; text-align: center">
        <a
          style="
          text-decoration: none;
          font-size: 12px;
          color: #bbb;
          mix-blend-mode: difference;
        "
          href="https://beian.miit.gov.cn/shouye.html"
          target="_blank"
        >
          浙ICP备19019742号
        </a>
      </div>
      <script type="text/javascript" src="origin/dat.gui.min.js"></script>
      <script type="text/javascript" src="origin/script.js"></script>
    </>
  );
}
