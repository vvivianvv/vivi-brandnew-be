const logger = require('../lib/logger');
const convenienceDao = require('../dao/convenienceDao');

const service = {
  // 편의점 등록
  async reg(params) {
    let inserted = null;

    try {
      inserted = await convenienceDao.insert(params);
      logger.debug(`(convenienceService.reg) ${JSON.stringify(inserted)}`);
    } catch (err) {
      logger.error(`(convenienceService.reg) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }
    // 결과값 리턴
    return new Promise((resolve) => {
      resolve(inserted);
    });
  },
  // 편의점 조회
  async list(params) {
    let result = null;

    try {
      result = await convenienceDao.selectList(params);
      logger.debug(`(convenienceService.list) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(convenienceService.list) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    return new Promise((resolve) => {
      resolve(result);
    });
  },

  // update
  async edit(params) {
    let result = null;

    try {
      result = await convenienceDao.update(params);
      logger.debug(`(convenienceService.edit) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(convenienceService.edit) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    return new Promise((resolve) => {
      resolve(result);
    });
  },
  // delelte
  async delete(params) {
    let result = null;

    try {
      result = await convenienceDao.delete(params);
      logger.debug(`(convenienceService.delete) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(convenienceService.delete) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    return new Promise((resolve) => {
      resolve(result);
    });
  },

};

module.exports = service;
