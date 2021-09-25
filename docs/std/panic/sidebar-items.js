initSidebarItems({"fn":[["always_abort","使所有 future panics 直接终止而不运行 panic hook 或展开。"],["catch_unwind","调用一个闭包，如果发生，则捕获展开 panic 的原因。"],["panic_any","Panic 当前线程，给定消息为 panic 有效负载。"],["resume_unwind","触发 panic 而不调用 panic hook。"],["set_hook","注册一个自定义 panic hook，替换以前注册的任何 panic。"],["take_hook","注销当前的 panic hook，并将其返回。"]],"struct":[["AssertUnwindSafe","一个简单的包装器，可以断言它是 unwind 安全的。"],["Location","包含有关 panic 位置信息的结构体。"],["PanicInfo","提供有关 panic 的信息的结构体。"]],"trait":[["RefUnwindSafe","标记 trait 表示将 X 表示 unwind 安全的共享引用的类型。"],["UnwindSafe","表示 Rust 中 “panic safe” 类型的标记 trait。"]]});