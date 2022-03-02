// const { Op } = require('sequelize');
const { Convenience } = require('../models/index');

const dao = {
  // 편의점 등록
  insert(params) {
    return new Promise((resolve, reject) => {
      Convenience.create(params).then((inserted) => {
        resolve(inserted);
      }).catch((err) => {
        reject(err);
      });
    });
  },
  // 편의점 조회
  selectList() {
    const setQuery = {};
    setQuery.order = [['id', 'ASC']];

    return new Promise((resolve, reject) => {
      Convenience.findAndCountAll({
        ...setQuery,
      }).then((selectedList) => {
        resolve(selectedList);
      }).catch((err) => {
        reject(err);
      });
    });
  },

  // 수정
  update(params) {
    return new Promise((resolve, reject) => {
      Convenience.update(
        params,
        {
          where: { id: params.id },
        },
      ).then(([updated]) => {
        resolve({ updatedCount: updated });
      }).catch((err) => {
        reject(err);
      });
    });
  },
  // 삭제
  delete(params) {
    return new Promise((resolve, reject) => {
      Convenience.destroy({
        where: { id: params.id },
      }).then((deleted) => {
        resolve({ deletedCount: deleted });
      }).catch((err) => {
        reject(err);
      });
    });
  },
};

module.exports = dao;
