import Node from './Node';
/**
 * 视频节点
 *<pre style="font-size:12px">
// 示例： 视频节点
var videoNode = new VideoNode('视频节点', 80, 346, 100, 60);

// 封面图片：没播放时显示
videoNode.setImage('./demo/img/camer.png');

// 视频源：支持类型参考各浏览器，MP4、mov等
videoNode.setVideo('./demo/video/video_demo.mov');
videoNode.textOffsetY = 5;

// 双击播放
videoNode.on('dblclick', function () {
    videoNode.play();
});

// 播放结束,显示封面图片
videoNode.onEnded(function () {
    videoNode.showCover();
});

 </pre>
 * @class
 * @extends Node
 */
declare class VideoNode extends Node {
    /**
     * 视频对象
     */
    video: any;
    /**
    * 视频对象路径
    */
    _videoSrc?: string;
    /**
     * 视频对象
     */
    isPlaying: boolean;
    constructor(text: any, x: any, y: any, w: any, h: any);
    /**
     * 显示封面图片
     */
    showCover(): void;
    /**
     * 播放
     */
    play(): void;
    /**
     * 暂停
     */
    pause(): void;
    /**
    * 设置视频
    * @param {string} videoSrc 视频文件路径
    */
    setVideo(videoSrc: any): void;
    /**
     * 当播放时的处理
     * @param {function} fn 回调函数
     */
    onPlay(fn: any): void;
    onPause(fn: any): void;
    /**
     * 当播放结束时的处理
     * @param {function} fn 回调函数
     */
    onEnded(fn: any): void;
    draw(ctx: any): void;
}
export { VideoNode as default };
