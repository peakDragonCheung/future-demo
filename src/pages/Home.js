import React from 'react';

import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  Pressable,
  Animated,
  StyleSheet,
} from 'react-native';
const dataInput = [
  {label: '输入框', name: 'SingleInput'},
  {label: 'Textarea', name: 'MultilineInput'},
  {label: '图片文件上传', name: 'UpLoadFile'},
  {label: 'Switch', name: 'Switch'},
  {label: 'Picker 选择器', name: 'Picker'},
  {label: '日期选择', name: 'DatePicker'},
  {label: '国家选择', name: 'CountryPicker'},
  {label: '单选', name: 'SingleSelect'},
  {label: '多选', name: 'MultilineSelect'},
  {label: '步进器', name: 'Stepper'},
  // {label: 'AreaPicker', name: 'AreaPicker'},
];

import {List} from 'future-rn-ui';

const base = [
  {label: '颜色', name: 'Color'},
  {label: '字体', name: 'Font'},
  {label: '图标', name: 'Icon'},
  {label: '按钮', name: 'Button'},
  {label: '卡片和圆角', name: 'Card'},
  {label: '视图', name: 'CardList'},
  {label: '布局', name: 'Layout'},
  {label: '间距', name: 'Space'},
  {label: '分割线', name: 'Divider'},
  {label: '头像', name: 'Portrait'},
];

const dataShow = [
  {label: '列表/List', name: 'List'},
  {label: '只读表单', name: 'ReadOnlyForm'},
  {label: '轮播图/Carousel', name: 'Carousel'},
  {label: '标记/Badge', name: 'Badge'},
  {label: '通告栏/NoticeBar', name: 'NoticeBar'},
  {label: '手风琴', name: 'Accordion'},
  {label: '空页面/Empty', name: 'Empty'},
  {label: '标签/Tag', name: 'Tag'},
];

const navigation = [
  {label: '导航栏/NavBar', name: 'NavBar'},
  {label: 'Tabs', name: 'Tabs'},
  // {label: '分段控件/SegmentedControl', name: 'SegmentedControl'},
  {label: '气泡弹出框/Popover', name: 'Popover'},
];

const feedback = [
  {label: '对话框/Modal', name: 'Modal'},
  {label: '动作弹出层/ActionSheet', name: 'ActionSheet'},
  {label: 'Toast', name: 'Toast'},
  {label: 'SnackBar', name: 'SnackBar'},
  {label: '气泡提示', name: 'Tip'},
  {label: '加载/Loading', name: 'Loading'},
  {label: '网络异常', name: 'NetworkError'},
  {label: '结果页', name: 'Result'},
  {label: 'Swipecell 滑动操作', name: 'Swipeable'},
];

const searchFilter = [
  {label: '搜索/Search', name: 'Search'},
  {label: '筛选/Filter', name: 'Filter'},
];

const other = [
  {label: '视频播放器', name: 'VideoPlayer'},
  {label: '音频播放器', name: 'AudioPlayer'},
  {label: '返回顶部', name: 'ReturnTop'}
];
class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  go = (screen) => {
    this.props.navigation.navigate(screen);
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={[styles.container, {paddingHorizontal: 20}]}>
          <Text style={styles.title}>飞鹊Future</Text>

          <Item
            ref={(_ref) => (this._base = _ref)}
            title={'基础'}
            items={base}
            go={this.go}
            onPress={() => {
              this._dataInput.close();
              this._dataShow.close();
              this._navigation.close();
              this._feedback.close();
              this._searchFilter.close();
              this._other.close();
            }}
          />
          <Item
            ref={(_ref) => (this._dataInput = _ref)}
            title={'数据录入'}
            items={dataInput}
            go={this.go}
            onPress={() => {
              this._base.close();
              this._dataShow.close();
              this._navigation.close();
              this._feedback.close();
              this._searchFilter.close();
              this._other.close();
            }}
          />
          <Item
            ref={(_ref) => (this._dataShow = _ref)}
            title={'数据显示'}
            items={dataShow}
            go={this.go}
            onPress={() => {
              this._base.close();
              this._dataInput.close();
              this._navigation.close();
              this._feedback.close();
              this._searchFilter.close();
              this._other.close();
            }}
          />
          <Item
            ref={(_ref) => (this._navigation = _ref)}
            title={'导航'}
            items={navigation}
            go={this.go}
            onPress={() => {
              this._base.close();
              this._dataInput.close();
              this._dataShow.close();
              this._feedback.close();
              this._searchFilter.close();
              this._other.close();
            }}
          />
          <Item
            ref={(_ref) => (this._feedback = _ref)}
            title={'反馈通知'}
            items={feedback}
            go={this.go}
            onPress={() => {
              this._base.close();
              this._dataInput.close();
              this._dataShow.close();
              this._navigation.close();
              this._searchFilter.close();
              this._other.close();
            }}
          />
          <Item
            ref={(_ref) => (this._searchFilter = _ref)}
            title={'搜索筛选'}
            items={searchFilter}
            go={this.go}
            onPress={() => {
              this._base.close();
              this._dataInput.close();
              this._dataShow.close();
              this._navigation.close();
              this._feedback.close();
              this._other.close();
            }}
          />
          <Item
            ref={(_ref) => (this._other = _ref)}
            title={'其他'}
            items={other}
            go={this.go}
            onPress={() => {
              this._base.close();
              this._dataInput.close();
              this._dataShow.close();
              this._navigation.close();
              this._feedback.close();
              this._searchFilter.close();
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 30,
            }}>
            <View
              style={{
                // borderBottomWidth: 0.5,
                // borderBottomColor: 'black',
                flexDirection: 'row',
              }}>
              <Pressable
                onPress={() => {
                  this.go('参与贡献');
                }}>
                <Text style={{fontSize: 12, color: '#888'}}>参与贡献</Text>
              </Pressable>
              <Text style={{fontSize: 12, color: '#888'}}> / </Text>
              <Pressable
                onPress={() => {
                  this.go('版本记录');
                }}>
                <Text style={{fontSize: 12, color: '#888'}}>版本记录</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

class Item extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      _height: new Animated.Value(59),
    };
  }

  expand() {
    this.setState(
      {
        visible: !this.state.visible,
      },
      () => {
        this.startAnimation(
          this.state.visible ? this.props.items.length * 54 + 59 : 59,
        );
      },
    );
    if (!this.state.visible) {
      this.props.onPress && this.props.onPress();
    }
  }

  close() {
    this.setState(
      {
        visible: false,
      },
      () => {
        this.startAnimation(59);
      },
    );
  }

  startAnimation(h) {
    Animated.timing(this.state._height, {
      toValue: h,
      duration: 100,
      useNativeDriver: false,
    }).start();
  }

  render() {
    return (
      <Animated.View
        style={[
          styles.item,
          {height: this.state._height},
          this.state.visible ? styles.shadow : null,
        ]}>
        <Pressable
          hitSlop={{left: 25, right: 25, top: 20, bottom: 20}}
          onPress={this.expand.bind(this)}>
          <Text style={styles.itemTitle}>{this.props.title}</Text>
        </Pressable>

        {this.state.visible ? (
          <View style={styles.itemContent}>
            {this.props.items.map((item, index) => {
              return (
                <List.Item
                  key={index}
                  title={item.label}
                  arrow="right"
                  onPress={() => this.props.go(`${item.name}Screen`)}
                />
              );
            })}
          </View>
        ) : null}
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  title: {
    fontSize: 25,
    lineHeight: 35,
    fontWeight: '500',
    color: '#222222',
    marginTop: 40,
    marginBottom: 30,
  },
  item: {
    height: 59,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 25,
    paddingVertical: 20,
    marginBottom: 15,
  },
  shadow: {
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.03,
    shadowRadius: 8,
    elevation: 20,
  },
  itemTitle: {
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '500',
  },
  itemContent: {
    marginTop: 20,
  },
});

export default Home;
