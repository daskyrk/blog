export default function init() {
  var E = {
    screen: 'pc',
    ajaxurl: 'https://www.lylares.com/wp-admin/admin-ajax.php',
    lrcurl:
      'https://www.lylares.com/wp-content/themes/Inspire/modules/player/lrc',
    bgm: { audio: true, autoplay: null, shuffle: null, showlrc: 'on' },
    bgv: 'off',
    comment: { edit: 'on' },
  };
  if (E.bgm.audio && E.screen == 'pc') {
    function lcz() {
      var _this = this;
      this.geci_object,
        this.geci_lines,
        this.upkp,
        this.classV1,
        this.classV2,
        this.initTop,
        this.center,
        this.empty,
        this.isDropgeci,
        this.width,
        this.height,
        this.align,
        this.oneline,
        this.luminous,
        this.change,
        (this.staue = !0),
        (this.tag = {}),
        (this.mould =
          '<ul style="height: 184px;list-style: none;position: relative;line-height: 1.4;padding: 0 15px;overflow-y: hidden;display:none;"></ul>'),
        (this.getgeci = 'Value');
      var errmsg = '程序发生异常，无法继续了！';
      (this.toTimer = function(e) {
        var t, n;
        return (
          (t = Math.floor(e / 60)),
          (t = isNaN(t) ? '--' : t >= 10 ? t : '0' + t),
          (n = Math.floor(e % 60)),
          (n = isNaN(n) ? '--' : n >= 10 ? n : '0' + n),
          t + ':' + n
        );
      }),
        (this.addgeci = function(e, t, n) {
          var r = document.createElement('li');
          (r.innerHTML = t ? t : ''),
            (r.className = e ? e : ''),
            (r.lang = n ? n : ''),
            this.geci_object.appendChild(r),
            this.geci_lines.push(r);
        }),
        (this.getgeciByValue = function(e) {
          (le = this.geci_lines.length), (e = '^' + e + '.*');
          for (var t = 0; t < le; t++) {
            if (this.geci_lines[t].lang.search(e) == 0) {
              return this.geci_lines[t];
            }
          }
          return null;
        }),
        (this.getgeciByValueInd = function(e) {
          le = this.geci_lines.length - 1;
          for (var t = le; t >= 0; t--) {
            p = this.geci_lines[t].lang;
            if (p && p < e) {
              return this.geci_lines[t];
            }
          }
          return null;
        }),
        (this.setClassName = function(e, t) {
          e && (e.className = t);
        }),
        (this.upTop = function(e) {
          var t = e.offsetTop,
            n = this.geci_object.scrollTop,
            r = t - this.center;
          this.myf(this.geci_object, n, r);
        }),
        (this.remove = function() {
          if (this.geci_lines != null) {
            for (var e = 0; e < this.geci_lines.length; e++) {
              this.geci_object.removeChild(this.geci_lines[e]);
            }
          }
          (this.geci_lines = new Array()),
            !this.empty &&
              this.empty != 0 &&
              alert('empty 属性有误! 该值必须>=零');
        }),
        (this.load = function(json, fun) {
          (gecis = json.gecis), (end = json[this.tag.end]);
          this.remove(),
          this._addgeci(json[this.tag.sname]),
          this._addgeci(json[this.tag.cname]),
          this._addgeci(json[this.tag.qname]),
          this._addgeci(json[this.tag.bname]),
          this._addgeci(json[this.tag.sgname]),
          this._addgeci(json[this.tag.special]),
          this._addgeci(json[this.tag.kname]);
          if (gecis) {
            for (var index in gecis) {
              this.addgeci(this.classV1, gecis[index].name, gecis[index].time);
            }
          }
          end &&
            (end.time
              ? this.addgeci(this.classV1, end.end, end.time)
              : this.addgeci(this.classV1, end)),
            typeof fun == 'function' && fun.call(null, null);
        }),
        (this._addgeci = function(e) {
          e &&
            (e.time
              ? this.addgeci(this.classV1, e.name, e.time)
              : this.addgeci(this.classV1, e));
        }),
        (this.Read = function(e, t) {
          if (t != null && typeof t == 'function') {
            return t.call(this, e);
          }
          var n = {};
          n.gecis = new Array();
          var r = e.split('['),
            i = r.length;
          for (var s = 0; s < i; s++) {
            var o = r[s],
              u = o.split(']');
            if (u.length == 2) {
              if (u[0].search('^[0-9]{2}:[0-9]{2}.[0-9]{1,3}$') < 0) {
                (title = u[0].split(':')), (n = tagswitch(title, n));
              } else {
                var a = { time: u[0], name: u[1] };
                n.gecis.push(a);
              }
            }
          }
          return n;
        }),
        (this.vls1 = function(e) {
          var n = {};
          n.gecis = new Array();
          var r = e.length,
            i = 0,
            s = 0,
            o = new Array();
          for (var u = 0; u < r; u++) {
            e[u] == '[' &&
              u > 8 &&
              (e.slice(u - 9, u - 1) + '').search(
                '^[0-9]{2}:[0-9]{2}.[0-9]{1,3}$',
              ) < 0 &&
              (o.push(e.substring(i, u)), (i = u));
          }
          o.push(e.substring(i, r));
          var a = {},
            f = [];
          for (var u = 0; u < o.length; u++) {
            var l = o[u],
              c = l.split(']');
            if (c.length === 2) {
              (c[0] + '').search('^\\[[0-9]{2}:[0-9]{2}.[0-9]{1,3}$') < 0
                ? ((c[0] = c[0].slice(1)),
                  (title = c[0].split(':')),
                  (n = tagswitch(title, n)))
                : ((h = c[0].slice(1) + ''), (a[h] = c[1]), f.push(h));
            } else {
              if (c.length > 2) {
                var h, e;
                e = c[c.length - 1];
                for (var p in c) {
                  c[p].search('^\\[[0-9]{2}:[0-9]{2}.[0-9]{1,3}$') == 0 &&
                    ((h = c[p].slice(1) + ''), (a[h] = e), f.push(h));
                }
              }
            }
          }
          f = f.sort();
          for (var p in f) {
            t = f[p];
            var d = { time: t, name: a[t] };
            n.gecis.push(d);
          }
          return n;
        });
      var tagswitch = function(e, t) {
        e.length === 2 && (tp = e[1]), (tag = _this.tag);
        switch (e[0]) {
          case tag.sname:
            t[tag.sname] = tp;
            break;
          case tag.cname:
            t[tag.cname] = tp;
            break;
          case tag.qname:
            t[tag.qname] = tp;
            break;
          case tag.bname:
            t[tag.bname] = tp;
            break;
          case tag.sgname:
            t[tag.sgname] = tp;
            break;
          case tag.special:
            t[tag.special] = tp;
            break;
          case tag.kname:
            t[tag.kname] = tp;
            break;
          case tag.end:
            t[tag.end] = tp;
        }
        return t;
      };
      (this.myf_Init = function() {
        (this.geci_object.innerHTML = this.mould),
          (asc = this.geci_object = this.geci_object.firstChild),
          (asc.style.width = this.width),
          (asc.style.height = this.height),
          (asc.style.textAlign = this.align),
          this.oneline
            ? ((this.empty = 0), (this.center = 5))
            : ((this.empty = 5),
              (this.center = (this.geci_object.style.height / 2) | 2)),
          this.isDropgeci && this.logon(!1);
      }),
        (this.setoccupy = function(e, t) {
          (e.style.display = 'block'),
            this.setClassName(e, this.classV2),
            this.upTop(e),
            this.upkp && this.unoccupy(this.upkp),
            (this.upkp = e),
            t && t(e);
        }),
        (this.unoccupy = function(e, t) {
          this.setClassName(e, this.classV1),
            this.oneline && (e.style.display = 'none'),
            t && t(e);
        }),
        (this.torun = function(time) {
          if (!this.staue) {
            return !1;
          }
          var time = this.toTimer(
              Math.round((time | event.srcElement.currentTime) * 100) / 100,
            ),
            line = eval('this.getgeciBy' + this.getgeci + '(time)');
          line && this.upkp != line && this.setoccupy(line);
        }),
        (this.logon = function(e) {
          if (window.FileReader) {
            var t = this.geci_object;
            e && (t = document.getElementById(e));
            function n(e) {
              e.stopPropagation(), e.preventDefault();
              var t = e.dataTransfer.files;
              for (var n = 0, r; (r = t[n]); n++) {
                var i = new FileReader();
                (i.onloadend = (function(e) {
                  return function(e) {
                    (img = e.target.result), img && _this.load(_this.Read(img));
                  };
                })(r)),
                  i.readAsText(r);
              }
            }
            function r(e) {}
            function i(e) {}
            function s(e) {
              e.stopPropagation(), e.preventDefault();
            }
            t.addEventListener('dragenter', r, !1),
              t.addEventListener('dragover', s, !1),
              t.addEventListener('drop', n, !1),
              t.addEventListener('dragleave', i, !1),
              t.addEventListener('ondragend', i, !1);
          } else {
            alert('你的浏览器不支持啊，同学');
          }
        });
      var timer = null;
      (this.myf = function(e, t, n) {
        timer != null && clearTimeout(timer), this.isUpOrDown(e, t, n);
      }),
        (getUpValue = function(e, t) {
          return (
            t - e > 100
              ? (e += 30)
              : t - e > 50
                ? (e += 10)
                : t - e > 20
                  ? (e += 5)
                  : t - e > 1 && e++,
            e
          );
        }),
        (getDowmValue = function(e, t) {
          return (
            e - t > 100
              ? (e -= 30)
              : e - t > 50
                ? (e -= 10)
                : e - t > 20
                  ? (e -= 5)
                  : e - t > 1 && e--,
            e
          );
        }),
        (this.isUpOrDown = function(e, t, n) {
          t < n ? this.toUp(e, t, n) : this.toDown(e, t, n);
        }),
        (this.toUp = function(e, t, n) {
          timer = setInterval(function() {
            t >= n && (clearTimeout(timer), (timer = null), (e.scrollTop = n)),
              (e.scrollTop = t),
              (t = getUpValue(t, n));
          }, 10);
        }),
        (this.toDown = function(e, t, n) {
          timer = setInterval(function() {
            t <= n && (clearTimeout(timer), (timer = null), (e.scrollTop = n)),
              (e.scrollTop = t),
              (t = getDowmValue(t, n));
          }, 30);
        }),
        (this.destory = function() {});
    }
    var geci = {
      msg: {
        ms1: '元素位置没有给出！ error : 103',
        ms2: '请给出歌词的链接地址，或文本内容！ error : 105',
      },
      tag: {
        sname: 'ti',
        cname: 'cl',
        qname: 'cs',
        bname: 'ps',
        sgname: 'ar',
        special: 'al',
        kname: 'by',
        end: 'end',
      },
      build: function(b, a) {
        var c = new lcz();
        return (
          (c.tag = geci.tag),
          b.object
            ? (c.geci_object = document.getElementById(b.object))
            : alert(geci.msg.ms1),
          (c.initTop = b['initTop'] != null ? b.initTop : 0),
          (c.center = b['center'] != null ? b.center : 0),
          (c.empty = b['empty'] != null ? b.empty : 0),
          (c.isDropgeci = b['isDropgeci'] != null ? b.isDropgeci : !0),
          (c.getgeci = b['seekMark'] != null ? b.seekMark : 'Value'),
          a &&
            ((c.classV1 =
              a['notoccupy'] != null ? a.notoccupy : 'geci_moonlight'),
            (c.classV2 = a['occupy'] != null ? a.occupy : 'geci_attention'),
            (c.width = a['width'] != null ? a.width : '550px'),
            (c.height = a['height'] != null ? a.height : '200px'),
            (c.align = a['align'] != null ? a.align : 'left'),
            (c.oneline = a['oneline'] != null ? a.oneline : !1)),
          c.myf_Init(),
          geci.readgeci(
            c,
            b.readType,
            {
              url: b.geciUrl ? b.geciUrl : null,
              text: b.geciText ? b.geciText : null,
            },
            function() {
              (c.geci_object.scrollTop = c.initTop),
                c.oneline && (c.geci_object.className += ' geci_hide'),
                b.syntony && b.syntony(c);
            },
          ) &&
            b.open &&
            geci.open(c),
          b.media &&
            ((mp = document.getElementById(b.media)),
            window.attachEvent
              ? mp.attachEvent('ontimeupdate', function() {
                  c.torun();
                })
              : mp.addEventListener(
                  'timeupdate',
                  function() {
                    c.torun();
                  },
                  !1,
                )),
          c
        );
      },
      readgeci: function(d, b, f, c) {
        var a = '';
        if (f.text) {
          a = f.text;
        } else {
          if (!f.url) {
            return alert(geci.msg.ms2), !1;
          }
          (xmlhttp = null),
            window.XMLHttpRequest
              ? (xmlhttp = new XMLHttpRequest())
              : window.ActiveXObject &&
                (xmlhttp = new ActiveXObject('Microsoft.XMLHTTP')),
            xmlhttp != null &&
              ((xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == 4) {
                  if (xmlhttp.status == 200) {
                    return (
                      (a = xmlhttp.responseText),
                      (a = a.replace(/<\/?.+?>/g, '').replace(/[\r\n]/g, '')),
                      d.load(d.Read(a, b), c),
                      !0
                    );
                  }
                  $('#lrc_2 ul').append(
                    '<li style="color: #69d2e7;">暂无歌词</li>',
                  );
                }
              }),
              xmlhttp.open('GET', f.url, !0),
              xmlhttp.send(null));
        }
        return d.load(d.Read(a, b), c), !0;
      },
      open: function(a) {
        a.geci_object && (a.geci_object.style.display = 'block'),
          (a.staue = !0);
      },
      close: function(a) {
        a.geci_object && (a.geci_object.style.display = 'none'), (a.staue = !1);
      },
      suspend: function(a) {
        a.geci_object && (a.staue = !1);
      },
      destroy: function(a) {
        geci.close(a), a.remove(a.geci_object);
      },
      setProgress: function(b, a) {
        b.torun(a);
      },
    };
    var bgm = $('#bgm'),
      bgm_title = $('#bgm-title'),
      listen = $('#listen'),
      listen_temp = $('#listen #temp'),
      listen_list = $('#listen #playlist'),
      listen_cover = $('#listen .cover'),
      listen_title = $('#listen .title'),
      listen_items = $('#listen .list .items'),
      listen_audio = $('#listen audio.bgm'),
      list_page_btn = $('.list-page-btn'),
      song_msg = $('#song-msg'),
      video = $('#bgvideo video'),
      btn_play = $('#listen .play'),
      btn_rewind = $('#listen .rewind'),
      btn_fastforward = $('#listen .fastforward'),
      btn_onlist = $('#listen .onlist'),
      btn_onsource = $('#listen #onsource'),
      repeat = localStorage.repeat || 0,
      shuffle = localStorage.shuffle || 'on',
      continous = !0,
      autoplay = !0,
      time = new Date(),
      isdelay = !1,
      timeout = !1,
      item_num = 0,
      null_num = 0,
      old_data,
      listLi,
      temp_id,
      isPlaying,
      playCounts,
      currentTrack,
      clearautoplay,
      song_name,
      list_height,
      list_page_num,
      audio = listen_audio[0];
    shuffle = 'on' == E.bgm.shuffle ? 'on' : 'off';
    var lrc_div =
        '<section id="song-lrc" class="lyric-text"><div id="lrcWrap" class="lrc-wrap lrc-wrap-open"><div id="lrcBox" class="lrc-box"><div id="lrc_2"></div></div></div><div class="lyric-script"></div></section>',
      addscript = function(a) {
        listen_temp.html(
          '<script type="text/javascript">' + a + '\x3c/script>',
        );
        'on' == E.bgm.showlrc && $('#wrapper').append(lrc_div);
      },
      playTisp = function(a, b) {
        a = playlist[a];
        switch (b) {
          case 'play':
            tips_update(
              '\u6b63\u5728\u64ad\u653e\uff1a' + a.title + ' - ' + a.artist,
            );
            break;
          case 'pause':
            tips_update('\u97f3\u4e50\u5df2\u6682\u505c\u3002');
            break;
          case 'autoplay':
            tips_update(
              '\u5373\u5c06\u64ad\u653e\uff1a' + a.title + ' - ' + a.artist,
            );
            break;
          case 'loading':
            tips_update(
              '\u6b63\u5728\u52a0\u8f7d\u6b4c\u5355\u5217\u8868\uff0c\u7a0d\u540e\u5c06\u81ea\u52a8\u64ad\u653e\u3002',
            );
        }
      },
      addlist = function(a) {
        if (0 == a.length)
          listen_items.append('<p>\u6ca1\u6709\u627e\u5230\u6b4c\u66f2</p>');
        else
          for (var b = 0; b < a.length; b++) {
            var c = a[b];
            item_num = b;
            item_num++;
            listen_items.append(
              '<li class="nowrap">' +
                item_num +
                '. ' +
                c.title +
                ' - ' +
                c.artist +
                '</li>',
            );
          }
      },
      loadlist = function() {
        listLi.each(function(a) {
          $(this).on('click', function() {
            currentTrack = a;
            loadMusic(currentTrack);
          });
        });
      },
      bgv_pause = function() {
        video.hasClass('instate') && video[0].pause();
      },
      bgv_play = function() {
        video.hasClass('instate') && video[0].play();
      },
      play = function() {
        playTisp(currentTrack, 'play');
        audio.play();
        btn_play.addClass('active').html('&#xe66d;');
        isPlaying = !0;
        bgv_pause();
      },
      pause = function() {
        playTisp(currentTrack, 'pause');
        audio.pause();
        btn_play.removeClass('active').html('&#xe66e;');
        isPlaying = !1;
        bgv_play();
      },
      switchTrack = function(a) {
        track =
          0 > a
            ? (currentTrack = playlist.length - 1)
            : a >= playlist.length
              ? (currentTrack = 0)
              : a;
        loadMusic(track);
      },
      shufflePlay = function() {
        var a = currentTrack;
        currentTrack = new Date().getTime() % playlist.length;
        a == currentTrack && ++currentTrack;
        switchTrack(currentTrack);
      },
      ended = function() {
        pause();
        audio.currentTime = 0;
        playCounts++;
        1 == continous && (isPlaying = !0);
        1 == repeat
          ? play()
          : 'on' === shuffle
            ? shufflePlay()
            : 2 == repeat
              ? switchTrack(++currentTrack)
              : currentTrack < playlist.length && switchTrack(++currentTrack);
      },
      afterLoad = function() {
        1 == isPlaying && play();
      },
      loadMusic = function(a) {
        var b = playlist[a];
        listen_title.html('\u6b63\u5728\u52a0\u8f7d ...');
        $.getJSON(
          E.ajaxurl +
            '?action=ajax_music_info&mid=' +
            b.mid +
            '&pid=' +
            b.pid +
            '&source=' +
            b.source,
          function(c) {
            listen_cover.attr('src', c.cover_url);
            listen_title
              .html(b.title + ' - ' + b.artist)
              .attr('title', b.title + ' - ' + b.artist);
            listLi
              .removeClass('playing')
              .eq(a)
              .addClass('playing');
            if ('' == c.song_url) {
              if ((null_num++, 0 < null_num)) {
                tips_update(
                  '\u8df3\u8fc7\u65e0\u6548\u7684\u6b4c\u66f2\uff0c\u5171' +
                    null_num +
                    '\u9996\u3002',
                );
                listen_audio.attr('src', '');
                if (null_num == item_num) {
                  null_num = 0;
                  setTimeout(function() {
                    tips_update(
                      '\u65e0\u6548\u7684\u6b4c\u5355\uff0c\u53ef\u80fd\u5b58\u5728\u4ed8\u8d39\u6b4c\u66f2\uff0c\u6b63\u5728\u52a0\u8f7d\u9ed8\u8ba4\u6b4c\u5355\u3002',
                    );
                    setTimeout(function() {
                      addscript(old_data);
                      listen_list.html('');
                      currentTrack =
                        'on' === shuffle ? time.getTime() % playlist.length : 0;
                      doData(0);
                      temp_id = 0;
                    }, 2e3);
                  }, 2e3);
                  return;
                }
                switchTrack(++currentTrack);
              }
            } else
              listen_audio.attr('src', c.song_url),
                audio.addEventListener('ended', ended, !1),
                audio.addEventListener('canplay', afterLoad, !1),
                (null_num = 0);
            $('#song-lrc')[0] &&
              ((c =
                E.lrcurl +
                '.php?action=lyric&id=' +
                b.tid +
                '&source=' +
                b.source),
              $('.lyric-script').html(
                '<script>geci.build({object:"lrc_2",media:"audio",geciUrl:"' +
                  c +
                  '",readType:"vls1",open:true},{oneline:false,height:"28px",width:"auto"});\x3c/script>',
              ));
          },
        );
      },
      is_autoplay = function() {
        'off' == E.bgv &&
          'on' == E.bgm.autoplay &&
          (playTisp(currentTrack, 'autoplay'),
          setTimeout(function() {
            audio.addEventListener('canplay', play(), !1);
          }, 3e3),
          listen.show(),
          $('#bgm').addClass('show'),
          setTimeout(function() {
            listen.slideUp(150);
            $('#bgm').removeClass('show');
          }, 1e3));
      },
      doData = function(a) {
        addlist(playlist);
        listLi = $('#playlist li');
        loadlist();
        0 == a && loadMusic(currentTrack);
      },
      original = function() {
        $.ajax({
          type: 'GET',
          data: { action: 'music_list_get', form: E.ajaxurl },
          beforeSend: function() {
            bgm_title.html('Loading...').addClass('isloading');
          },
          success: function(a) {
            bgm_title.html('Music').removeClass('isloading');
            addscript(a);
            currentTrack =
              'on' === shuffle ? time.getTime() % playlist.length : 0;
            doData(0);
            is_autoplay();
            old_data = a;
          },
        });
      },
      search_data = function(a, b, c) {
        var d;
        $.each($('.source-items input:radio:checked'), function() {
          d = $(this).val();
        });
        $.ajax({
          type: 'GET',
          data: {
            action: 'music_search_get',
            form: E.ajaxurl,
            name: a,
            source: d,
            page: c,
          },
          dataType: 'html',
          beforeSend: function() {
            listen_list.css('height', b);
            listen_list.html('');
            loading_start(listen_list);
            temp_id = currentTrack = 0;
            song_msg.val() != a && song_msg.val(a);
          },
          success: function(a) {
            addscript(a);
            loading_done(listen_list);
            1 == isPlaying ? ((currentTrack = -1), doData(1)) : doData(0);
            listen_list.css('height', 'auto');
            list_page_btn.show(100);
          },
          error: function(a) {
            alert('\u975e\u6cd5\u64cd\u4f5c\u3002');
          },
        });
      };
    $('.music-search').bind('submit', function(a) {
      a.preventDefault();
      list_height = listen_list.height();
      song_name = song_msg.val();
      list_page_num = 1;
      search_data(song_name, list_height, list_page_num);
    });
    $('#list-previous').on('click', function() {
      --list_page_num;
      1 > list_page_num
        ? (tips_update('\u5df2\u7ecf\u662f\u7b2c\u4e00\u9875\u3002'),
          (list_page_num = 1))
        : search_data(song_name, list_height, list_page_num);
    });
    $('#list-next').on('click', function() {
      list_page_num += 1;
      search_data(song_name, list_height, list_page_num);
    });
    var single_music = function() {
      $('#button.music-id')
        .unbind('click')
        .bind('click', function() {
          if (0 == isdelay) {
            var a = $(this).data('mid'),
              b = $(this).data('source'),
              c = 'playlist' == $(this).data('type') ? '0' : '1';
            if (temp_id == a) {
              tips_update(
                '\u8be5\u6b4c\u5355\u5df2\u7ecf\u5728\u64ad\u653e\u5217\u8868\u4e2d\u3002',
              );
              return;
            }
            if (bgm_title.hasClass('isloading')) {
              tips_update(
                '\u6b63\u5728\u521d\u59cb\u5316\u64ad\u653e\u5668\u3002',
              );
              return;
            }
            clearTimeout(clearautoplay);
            $.ajax({
              type: 'GET',
              data: {
                action: 'music_json_get',
                form: E.ajaxurl,
                id: a,
                type: c,
                source: b,
              },
              beforeSend: function() {
                bgm_title.html('Loading...');
                listen_list.html('');
                loading_start(listen_list);
                playTisp(!1, 'loading');
                audio.pause();
                btn_play.removeClass('active').html('&#xe66e;');
                isPlaying = !1;
                currentTrack = 0;
                temp_id = a;
                isdelay = !0;
                list_page_btn.hide(100);
                song_msg.val('');
              },
              success: function(a) {
                bgm_title.html('Music');
                tips_update(
                  '\u6b4c\u5355\u52a0\u8f7d\u5b8c\u6210\uff0c\u5373\u5c06\u81ea\u52a8\u64ad\u653e\u3002',
                );
                loading_done(listen_list);
                18 < a.length
                  ? (addscript(a),
                    doData(0),
                    (clearautoplay = setTimeout(function() {
                      audio.addEventListener('canplay', play(), !1);
                    }, 2e3)))
                  : (tips_update(
                      '\u65e0\u6548\u7684\u6b4c\u5355\uff0c\u6b63\u5728\u52a0\u8f7d\u9ed8\u8ba4\u6b4c\u5355\u3002',
                    ),
                    setTimeout(function() {
                      addscript(old_data);
                      currentTrack =
                        'on' === shuffle ? time.getTime() % playlist.length : 0;
                      listen_list.html('');
                      doData(0);
                      temp_id = 0;
                    }, 2e3));
              },
              error: function(a) {
                alert('\u672a\u77e5\u9519\u8bef\u3002');
              },
            });
            setTimeout(function() {
              isdelay = !1;
            }, 2e3);
          }
          return !1;
        });
    };
    btn_play.on('click', function() {
      $(this).hasClass('active') ? pause() : play();
    });
    btn_rewind.on('click', function() {
      'on' === shuffle ? shufflePlay() : switchTrack(--currentTrack);
    });
    btn_fastforward.on('click', function() {
      'on' === shuffle ? shufflePlay() : switchTrack(++currentTrack);
    });
    btn_onlist.on('click', function() {
      var a = $('#listen .list');
      a.hasClass('show')
        ? a.removeClass('show').css({ height: '0' })
        : a.addClass('show').css({ height: 'auto' });
    });
    btn_onsource.on('click', function() {
      var a = $('#listen .source-items');
      a.hasClass('show')
        ? (a.removeClass('show').css({ height: '0' }),
          $(this).removeClass('deg'))
        : (a.addClass('show').css({ height: '36px' }), $(this).addClass('deg'));
    });
    bgm.on('click', function(a) {
      _this = $(this);
      $('#bgm.show')[0]
        ? (listen.slideUp(150), _this.removeClass('show'))
        : (listen.show(), _this.addClass('show'));
      $(document).one('click', function() {
        listen.slideUp(150);
        _this.removeClass('show');
      });
      a.stopPropagation();
      listen.on('click', function(a) {
        a.stopPropagation();
      });
    });
    original();
  }
}
