'use client';

import { useEffect } from 'react';
import 'gitalk/dist/gitalk.css';

export default function GitalkComponent({ options }) {
  const containerId = `gitalk-container-${options.id || Date.now()}`;
  
  useEffect(() => {
    import('gitalk').then(({ default: Gitalk }) => {
      const gitalk = new Gitalk({
        ...options,
      });
      
      gitalk.render(containerId);
    });
  }, [options, containerId]);

  return <div id={containerId} />;
}