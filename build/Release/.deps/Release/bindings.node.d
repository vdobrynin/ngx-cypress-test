cmd_Release/bindings.node := c++ -bundle -undefined dynamic_lookup -Wl,-search_paths_first -mmacosx-version-min=11.0 -arch x86_64 -L./Release -stdlib=libc++  -o Release/bindings.node  
